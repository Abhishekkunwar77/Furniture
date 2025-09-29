import React, { useState } from 'react';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';

const CustomerShowcase = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const customerStories = [
    {
      id: 1,
      customerName: 'Sarah Johnson',
      location: 'Austin, TX',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      beforeImage:
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      afterImage:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      story: `"I transformed my living room with FurniCraft's Modern Collection. The quality was amazing and the customer service was exceptional. My space went from cluttered to sophisticated in just one weekend!"`,
      roomType: 'Living Room',
      budget: '$2,800',
      timeframe: '1 Weekend',
      rating: 5,
      purchasedItems: [
        'Modern Sectional Sofa',
        'Glass Coffee Table',
        'Floor Lamp',
        'Area Rug',
      ],
    },
    {
      id: 2,
      customerName: 'Michael Chen',
      location: 'Seattle, WA',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      beforeImage:
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
      afterImage:
        'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
      story: `"Working from home became so much better after setting up my office with FurniCraft furniture. The ergonomic chair and standing desk have improved my productivity and comfort significantly."`,
      roomType: 'Home Office',
      budget: '$1,650',
      timeframe: '3 Days',
      rating: 5,
      purchasedItems: [
        'Standing Desk',
        'Ergonomic Chair',
        'Storage Cabinet',
        'Desk Lamp',
      ],
    },
    {
      id: 3,
      customerName: 'Emily Rodriguez',
      location: 'Miami, FL',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
      beforeImage:
        'https://images.pixabay.com/photo/2017/03/28/12/10/chairs-2181947_1280.jpg',
      afterImage:
        'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
      story: `"Our dining room makeover was amazing! The rustic dining set perfectly matches our home's aesthetic. Family dinners have never felt more special and inviting."`,
      roomType: 'Dining Room',
      budget: '$2,200',
      timeframe: '2 Weeks',
      rating: 5,
      purchasedItems: [
        'Rustic Dining Table',
        'Dining Chairs (6)',
        'Buffet Cabinet',
      ],
    },
    {
      id: 4,
      customerName: 'David Thompson',
      location: 'Denver, CO',
      avatar: 'https://randomuser.me/api/portraits/men/38.jpg',
      beforeImage:
        'https://images.unsplash.com/photo-1541558869434-2840d308329a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      afterImage:
        'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
      story: `"The bedroom furniture from FurniCraft transformed our master suite into a peaceful retreat. The quality is outstanding and the delivery was seamless."`,
      roomType: 'Bedroom',
      budget: '$3,100',
      timeframe: '1 Week',
      rating: 5,
      purchasedItems: [
        'Platform Bed',
        'Nightstand Set',
        'Dresser',
        'Accent Chair',
      ],
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Jennifer Walsh',
      location: 'Portland, OR',
      avatar: 'https://randomuser.me/api/portraits/women/42.jpg',
      rating: 5,
      text: `"Exceptional quality and service! My furniture arrived perfectly packaged and the assembly was straightforward. Highly recommend FurniCraft!"`,
    },
    {
      id: 2,
      name: 'Robert Kim',
      location: 'Chicago, IL',
      avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
      rating: 5,
      text: `"Best furniture shopping experience I've had. The AR visualization helped me see exactly how pieces would look in my space."`,
    },
    {
      id: 3,
      name: 'Lisa Martinez',
      location: 'Phoenix, AZ',
      avatar: 'https://randomuser.me/api/portraits/women/35.jpg',
      rating: 5,
      text: `"The customer service team went above and beyond to help me choose the perfect pieces for my home. Love my new living room!"`,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-accent font-semibold text-brand-primary mb-4">
            Customer Stories
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            See how our customers have transformed their spaces with FurniCraft
            furniture. Real homes, real transformations, real satisfaction.
          </p>
        </div>

        {/* Before/After Transformations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {customerStories?.slice(0, 2)?.map((story) => (
            <div
              key={story?.id}
              className="bg-brand-secondary rounded-xl overflow-hidden shadow-brand hover:shadow-xl transition-brand"
            >
              {/* Before/After Images */}
              <div className="grid grid-cols-2 h-64">
                <div className="relative overflow-hidden">
                  <img
                    draggable="false"
                    src={story?.beforeImage}
                    alt="Before transformation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Before
                    </span>
                  </div>
                </div>
                <div className="relative overflow-hidden">
                  <img
                    draggable="false"
                    src={story?.afterImage}
                    alt="After transformation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      After
                    </span>
                  </div>
                </div>
              </div>

              {/* Story Content */}
              <div className="p-6">
                {/* Customer Info */}
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    draggable="false"
                    src={story?.avatar}
                    alt={story?.customerName}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-brand-primary">
                      {story?.customerName}
                    </h3>
                    <p className="text-sm text-secondary">{story?.location}</p>
                  </div>
                  <div className="ml-auto flex items-center">
                    {[...Array(story?.rating)]?.map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>

                {/* Story Text */}
                <p className="text-secondary mb-4 italic">{story?.story}</p>

                {/* Project Details */}
                <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-secondary">Room:</span>
                    <div className="font-medium text-brand-primary">
                      {story?.roomType}
                    </div>
                  </div>
                  <div>
                    <span className="text-secondary">Budget:</span>
                    <div className="font-medium text-brand-primary">
                      {story?.budget}
                    </div>
                  </div>
                  <div>
                    <span className="text-secondary">Timeline:</span>
                    <div className="font-medium text-brand-primary">
                      {story?.timeframe}
                    </div>
                  </div>
                </div>

                {/* View Details Button */}
                <Button
                  variant="outline"
                  fullWidth
                  className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-black"
                  iconName="ArrowRight"
                  iconPosition="right"
                  onClick={() => setSelectedStory(story)}
                >
                  View Full Story
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Testimonials */}
        <div className="bg-brand-canvas rounded-xl p-8">
          <h3 className="text-2xl font-accent font-semibold text-brand-primary text-center mb-8">
            What Our Customers Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials?.map((testimonial) => (
              <div
                key={testimonial?.id}
                className="bg-white rounded-lg p-6 shadow-brand hover:shadow-xl transition-brand"
              >
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial?.rating)]?.map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-secondary mb-4 italic">
                  {testimonial?.text}
                </p>

                {/* Customer Info */}
                <div className="flex items-center space-x-3">
                  <img
                    draggable="false"
                    src={testimonial?.avatar}
                    alt={testimonial?.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-brand-primary">
                      {testimonial?.name}
                    </div>
                    <div className="text-sm text-secondary">
                      {testimonial?.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Share Your Story CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-brand max-w-2xl mx-auto">
            <Icon
              name="Camera"
              size={48}
              className="text-brand-cta mx-auto mb-4"
            />
            <h3 className="text-2xl font-accent font-semibold text-brand-primary mb-4">
              Share Your Transformation
            </h3>
            <p className="text-secondary mb-6">
              We'd love to feature your furniture transformation! Share your
              before and after photos for a chance to be featured on our website
              and social media.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                style={{ backgroundColor: '#D69E2E' }}
                variant="default"
                className="bg-brand-cta hover:bg-brand-cta/90 text-white"
                iconName="Upload"
                iconPosition="left"
              >
                Share Your Story
              </Button>
              <Button
                variant="outline"
                className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-black"
                iconName="Instagram"
                iconPosition="left"
              >
                Tag Us @FurniCraft
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Story Detail Modal */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-accent font-semibold text-brand-primary">
                  {selectedStory?.customerName}'s Transformation
                </h3>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-brand"
                >
                  <Icon name="X" size={20} />
                </button>
              </div>

              {/* Before/After Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-medium text-brand-primary mb-2">
                    Before
                  </h4>
                  <img
                    draggable="false"
                    src={selectedStory?.beforeImage}
                    alt="Before transformation"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-brand-primary mb-2">After</h4>
                  <img
                    draggable="false"
                    src={selectedStory?.afterImage}
                    alt="After transformation"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Story Details */}
              <div className="space-y-4">
                <p className="text-secondary text-lg italic">
                  {selectedStory?.story}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-secondary">Room Type:</span>
                    <div className="font-medium text-brand-primary">
                      {selectedStory?.roomType}
                    </div>
                  </div>
                  <div>
                    <span className="text-secondary">Total Budget:</span>
                    <div className="font-medium text-brand-primary">
                      {selectedStory?.budget}
                    </div>
                  </div>
                  <div>
                    <span className="text-secondary">Timeline:</span>
                    <div className="font-medium text-brand-primary">
                      {selectedStory?.timeframe}
                    </div>
                  </div>
                  <div>
                    <span className="text-secondary">Rating:</span>
                    <div className="flex items-center">
                      {[...Array(selectedStory?.rating)]?.map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={14}
                          className="text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-brand-primary mb-2">
                    Purchased Items:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedStory?.purchasedItems?.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon
                          name="Check"
                          size={16}
                          className="text-green-500"
                        />
                        <span className="text-secondary">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CustomerShowcase;
