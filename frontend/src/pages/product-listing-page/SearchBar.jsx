import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const SearchBar = ({
  onSearch,
  onVoiceSearch,
  placeholder = 'Search furniture...',
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

  // Mock search suggestions
  const mockSuggestions = [
    'Modern sofa',
    'Dining table',
    'Office chair',
    'Bedroom set',
    'Coffee table',
    'Bookshelf',
    'Accent chair',
    'Floor lamp',
    'Storage ottoman',
    'TV stand',
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionsRef?.current &&
        !suggestionsRef?.current?.contains(event?.target) &&
        !inputRef?.current?.contains(event?.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const value = e?.target?.value;
    setSearchQuery(value);

    if (value?.length > 0) {
      const filteredSuggestions = mockSuggestions?.filter((suggestion) =>
        suggestion?.toLowerCase()?.includes(value?.toLowerCase())
      );
      setSuggestions(filteredSuggestions?.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSearch = (query = searchQuery) => {
    if (query?.trim()) {
      onSearch(query?.trim());
      setShowSuggestions(false);
      inputRef?.current?.blur();
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    handleSearch(suggestion);
  };

  const handleKeyPress = (e) => {
    if (e?.key === 'Enter') {
      handleSearch();
    } else if (e?.key === 'Escape') {
      setShowSuggestions(false);
      inputRef?.current?.blur();
    }
  };

  const handleVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();

      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        const transcript = event?.results?.[0]?.[0]?.transcript;
        setSearchQuery(transcript);
        handleSearch(transcript);
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition?.start();
    } else {
      // Fallback for browsers without speech recognition
      onVoiceSearch?.();
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSuggestions([]);
    setShowSuggestions(false);
    inputRef?.current?.focus();
    onSearch('');
  };

  return (
    <div className="relative w-full max-w-2xl">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon name="Search" size={20} className="text-secondary" />
        </div>

        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          onFocus={() => searchQuery?.length > 0 && setShowSuggestions(true)}
          placeholder={placeholder}
          className="w-full pl-10 pr-20 py-3 border border-brand rounded-lg text-brand-primary placeholder-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-brand"
        />

        <div className="absolute inset-y-0 right-0 flex items-center gap-1 pr-2">
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="p-1 text-secondary hover:text-brand-primary transition-brand"
              title="Clear search"
            >
              <Icon name="X" size={16} />
            </button>
          )}

          <button
            onClick={handleVoiceSearch}
            disabled={isListening}
            className={`p-2 rounded-md transition-brand ${
              isListening
                ? 'text-red-500 bg-red-50'
                : 'text-secondary hover:text-brand-primary hover:bg-brand-secondary'
            }`}
            title={isListening ? 'Listening...' : 'Voice search'}
          >
            <Icon name={isListening ? 'MicOff' : 'Mic'} size={16} />
          </button>

          <Button
            variant="default"
            size="sm"
            onClick={() => handleSearch()}
            className="bg-brand-cta hover:bg-brand-cta/90 text-white"
          >
            Search
          </Button>
        </div>
      </div>
      {/* Search Suggestions */}
      {showSuggestions && suggestions?.length > 0 && (
        <div
          ref={suggestionsRef}
          className="absolute top-full left-0 right-0 mt-1 bg-white border border-brand rounded-lg shadow-brand z-10"
        >
          <div className="py-2">
            {suggestions?.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="w-full flex items-center gap-3 px-4 py-2 text-left text-sm text-secondary hover:bg-brand-secondary hover:text-brand-primary transition-brand"
              >
                <Icon name="Search" size={16} />
                <span>{suggestion}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Voice Search Indicator */}
      {isListening && (
        <div className="absolute top-full left-0 right-0 mt-1 p-3 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center gap-2 text-red-600">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm">Listening... Speak now</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
