import React, { useState } from 'react';
import Icon from '../../components/AppIcon';

const ProductSpecifications = ({
  specifications,
  warranty,
  careInstructions,
}) => {
  const [activeTab, setActiveTab] = useState('specifications');

  const tabs = [
    { id: 'specifications', label: 'Specifications', icon: 'FileText' },
    { id: 'warranty', label: 'Warranty', icon: 'Shield' },
    { id: 'care', label: 'Care Instructions', icon: 'Heart' },
  ];

  return (
    <div className="bg-white rounded-lg border border-brand">
      {/* Tab Navigation */}
      <div className="border-b border-brand">
        <div className="flex">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-brand ${
                activeTab === tab?.id
                  ? 'text-brand-primary border-b-2 border-brand-primary bg-brand-secondary/30'
                  : 'text-secondary hover:text-brand-primary hover:bg-brand-secondary/20'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'specifications' && (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-brand-primary mb-4">
              Product Specifications
            </h3>

            {/* Dimensions */}
            <div>
              <h4 className="text-sm font-medium text-brand-primary mb-3">
                Dimensions
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-brand-secondary p-3 rounded-md">
                  <div className="text-xs text-secondary uppercase tracking-wide mb-1">
                    Length
                  </div>
                  <div className="text-lg font-medium text-brand-primary">
                    {specifications?.dimensions?.length}
                  </div>
                </div>
                <div className="bg-brand-secondary p-3 rounded-md">
                  <div className="text-xs text-secondary uppercase tracking-wide mb-1">
                    Width
                  </div>
                  <div className="text-lg font-medium text-brand-primary">
                    {specifications?.dimensions?.width}
                  </div>
                </div>
                <div className="bg-brand-secondary p-3 rounded-md">
                  <div className="text-xs text-secondary uppercase tracking-wide mb-1">
                    Height
                  </div>
                  <div className="text-lg font-medium text-brand-primary">
                    {specifications?.dimensions?.height}
                  </div>
                </div>
              </div>
            </div>

            {/* Materials */}
            <div>
              <h4 className="text-sm font-medium text-brand-primary mb-3">
                Materials & Construction
              </h4>
              <div className="space-y-3">
                {specifications?.materials?.map((material, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon
                      name="Dot"
                      size={16}
                      className="text-brand-accent mt-1"
                    />
                    <div>
                      <span className="font-medium text-brand-primary">
                        {material?.type}:
                      </span>
                      <span className="text-secondary ml-2">
                        {material?.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Details */}
            <div>
              <h4 className="text-sm font-medium text-brand-primary mb-3">
                Additional Details
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-secondary">Weight:</span>
                    <span className="text-brand-primary font-medium">
                      {specifications?.weight}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary">Assembly Required:</span>
                    <span className="text-brand-primary font-medium">
                      {specifications?.assembly}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary">Origin:</span>
                    <span className="text-brand-primary font-medium">
                      {specifications?.origin}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-secondary">Style:</span>
                    <span className="text-brand-primary font-medium">
                      {specifications?.style}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary">Collection:</span>
                    <span className="text-brand-primary font-medium">
                      {specifications?.collection}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary">Sustainability:</span>
                    <span className="text-brand-primary font-medium">
                      {specifications?.sustainability}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'warranty' && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-brand-primary mb-4">
              Warranty Information
            </h3>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Shield" size={20} className="text-green-600" />
                <span className="font-medium text-green-800">
                  {warranty?.duration} Warranty
                </span>
              </div>
              <p className="text-green-700 text-sm">{warranty?.coverage}</p>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium text-brand-primary">
                What's Covered:
              </h4>
              <ul className="space-y-2">
                {warranty?.covered?.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-sm text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium text-brand-primary">
                What's Not Covered:
              </h4>
              <ul className="space-y-2">
                {warranty?.notCovered?.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon
                      name="X"
                      size={16}
                      className="text-red-600 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-sm text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brand-secondary p-4 rounded-lg">
              <h4 className="text-sm font-medium text-brand-primary mb-2">
                How to Claim Warranty:
              </h4>
              <p className="text-sm text-secondary">{warranty?.claimProcess}</p>
            </div>
          </div>
        )}

        {activeTab === 'care' && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-brand-primary mb-4">
              Care Instructions
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-brand-primary mb-3 flex items-center space-x-2">
                  <Icon name="Droplets" size={16} className="text-blue-600" />
                  <span>Daily Care</span>
                </h4>
                <ul className="space-y-2">
                  {careInstructions?.daily?.map((instruction, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Icon
                        name="Dot"
                        size={16}
                        className="text-brand-accent mt-1"
                      />
                      <span className="text-sm text-secondary">
                        {instruction}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium text-brand-primary mb-3 flex items-center space-x-2">
                  <Icon name="Calendar" size={16} className="text-green-600" />
                  <span>Weekly Care</span>
                </h4>
                <ul className="space-y-2">
                  {careInstructions?.weekly?.map((instruction, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Icon
                        name="Dot"
                        size={16}
                        className="text-brand-accent mt-1"
                      />
                      <span className="text-sm text-secondary">
                        {instruction}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Icon
                  name="AlertTriangle"
                  size={16}
                  className="text-yellow-600"
                />
                <span className="font-medium text-yellow-800">
                  Important Notes
                </span>
              </div>
              <ul className="space-y-1">
                {careInstructions?.warnings?.map((warning, index) => (
                  <li key={index} className="text-sm text-yellow-700">
                    • {warning}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brand-secondary p-4 rounded-lg">
              <h4 className="text-sm font-medium text-brand-primary mb-2">
                Professional Care Services
              </h4>
              <p className="text-sm text-secondary mb-3">
                FurniCraft offers professional cleaning and maintenance services
                for your furniture.
              </p>
              <button className="text-sm text-brand-accent hover:underline">
                Schedule Professional Care →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSpecifications;
