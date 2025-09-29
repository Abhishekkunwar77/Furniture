import React, { useState } from 'react';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';

const CustomerReviews = ({ reviews, averageRating, totalReviews }) => {
  const [sortBy, setSortBy] = useState('newest');
  const [filterRating, setFilterRating] = useState('all');
  const [showReviewForm, setShowReviewForm] = useState(false);

  const ratingDistribution = [
    { stars: 5, count: 156, percentage: 78 },
    { stars: 4, count: 32, percentage: 16 },
    { stars: 3, count: 8, percentage: 4 },
    { stars: 2, count: 3, percentage: 1.5 },
    { stars: 1, count: 1, percentage: 0.5 },
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'highest', label: 'Highest Rating' },
    { value: 'lowest', label: 'Lowest Rating' },
    { value: 'helpful', label: 'Most Helpful' },
  ];

  const formatDate = (dateString) => {
    return new Date(dateString)?.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const renderStars = (rating, size = 16) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)]?.map((_, i) => (
          <Icon
            key={i}
            name="Star"
            size={size}
            className={
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg border border-brand">
      {/* Reviews Header */}
      <div className="p-6 border-b border-brand">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-accent font-semibold text-brand-primary">
            Customer Reviews
          </h2>
          <Button
            variant="outline"
            onClick={() => setShowReviewForm(!showReviewForm)}
            iconName="Edit"
            iconPosition="left"
            className="border-brand-primary text-brand-primary hover:bg-brand-secondary"
          >
            Write Review
          </Button>
        </div>

        {/* Rating Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
              <span className="text-4xl font-bold text-brand-primary">
                {averageRating}
              </span>
              {renderStars(Math.floor(averageRating), 20)}
            </div>
            <p className="text-secondary">Based on {totalReviews} reviews</p>
          </div>

          <div className="space-y-2">
            {ratingDistribution?.map((rating) => (
              <div key={rating?.stars} className="flex items-center space-x-3">
                <span className="text-sm text-secondary w-6">
                  {rating?.stars}★
                </span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-400 h-2 rounded-full"
                    style={{ width: `${rating?.percentage}%` }}
                  />
                </div>
                <span className="text-sm text-secondary w-8">
                  {rating?.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Review Form */}
      {showReviewForm && (
        <div className="p-6 bg-brand-secondary border-b border-brand">
          <h3 className="text-lg font-medium text-brand-primary mb-4">
            Write Your Review
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-brand-primary mb-2">
                Your Rating
              </label>
              <div className="flex space-x-1">
                {[...Array(5)]?.map((_, i) => (
                  <button
                    key={i}
                    className="text-gray-300 hover:text-yellow-400"
                  >
                    <Icon name="Star" size={24} />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-primary mb-2">
                Review Title
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                placeholder="Summarize your experience"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-primary mb-2">
                Your Review
              </label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                placeholder="Tell others about your experience with this product"
              />
            </div>
            <div className="flex space-x-3">
              <Button
                variant="default"
                className="bg-brand-cta hover:bg-brand-cta/90 text-white"
              >
                Submit Review
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowReviewForm(false)}
                className="border-gray-300 text-secondary hover:bg-gray-50"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
      {/* Filters and Sort */}
      <div className="p-6 border-b border-brand">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-brand-primary">
              Filter by:
            </span>
            <select
              value={filterRating}
              onChange={(e) => setFilterRating(e?.target?.value)}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
            >
              <option value="all">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
              <option value="2">2 Stars</option>
              <option value="1">1 Star</option>
            </select>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-brand-primary">
              Sort by:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e?.target?.value)}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
            >
              {sortOptions?.map((option) => (
                <option key={option?.value} value={option?.value}>
                  {option?.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {/* Reviews List */}
      <div className="divide-y divide-brand">
        {reviews?.map((review) => (
          <div key={review?.id} className="p-6">
            <div className="flex items-start space-x-4">
              <img
                draggable="false"
                src={review?.avatar}
                alt={review?.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-brand-primary">
                      {review?.name}
                    </h4>
                    <div className="flex items-center space-x-2">
                      {renderStars(review?.rating)}
                      <span className="text-sm text-secondary">
                        {formatDate(review?.date)}
                      </span>
                    </div>
                  </div>
                  {review?.verified && (
                    <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                      <Icon name="CheckCircle" size={12} />
                      <span>Verified Purchase</span>
                    </div>
                  )}
                </div>

                <h5 className="font-medium text-brand-primary mb-2">
                  {review?.title}
                </h5>
                <p className="text-secondary mb-4">{review?.content}</p>

                {/* Review Images */}
                {review?.images && review?.images?.length > 0 && (
                  <div className="flex space-x-2 mb-4">
                    {review?.images?.map((image, index) => (
                      <img
                        draggable="false"
                        key={index}
                        src={image}
                        alt={`Review image ${index + 1}`}
                        className="w-16 h-16 rounded-md object-cover cursor-pointer hover:opacity-80"
                      />
                    ))}
                  </div>
                )}

                {/* Review Actions */}
                <div className="flex items-center space-x-6">
                  <button className="flex items-center space-x-1 text-sm text-secondary hover:text-brand-primary">
                    <Icon name="ThumbsUp" size={14} />
                    <span>Helpful ({review?.helpful})</span>
                  </button>
                  <button className="flex items-center space-x-1 text-sm text-secondary hover:text-brand-primary">
                    <Icon name="MessageCircle" size={14} />
                    <span>Reply</span>
                  </button>
                  <button className="flex items-center space-x-1 text-sm text-secondary hover:text-brand-primary">
                    <Icon name="Flag" size={14} />
                    <span>Report</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Load More */}
      <div className="p-6 text-center border-t border-brand">
        <Button
          variant="outline"
          className="border-brand-primary text-brand-primary hover:bg-brand-secondary"
        >
          Load More Reviews
        </Button>
      </div>
    </div>
  );
};

export default CustomerReviews;
