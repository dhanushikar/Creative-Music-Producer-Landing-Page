import React from 'react';
export const TestimonialsSection = () => {
  const testimonials = [{
    id: 1,
    quote: 'Working with this producer completely transformed my sound. The attention to detail and creative input made all the difference in my album.',
    name: 'Alex Rivera',
    title: 'Independent Artist',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
  }, {
    id: 2,
    quote: "The mixing and mastering quality is unmatched. Our band's EP sounds professional and radio-ready thanks to the expertise and equipment here.",
    name: 'The Midnight Waves',
    title: 'Rock Band',
    image: 'https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }, {
    id: 3,
    quote: 'From concept to completion, the production process was seamless. The beats were exactly what I was looking for and elevated my lyrics perfectly.',
    name: 'Sophia Chen',
    title: 'Singer-Songwriter',
    image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=389&q=80'
  }];
  return <section id="testimonials" className="py-20 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
            Client Testimonials
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => <div key={testimonial.id} className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all relative group">
              {/* Quote mark decoration */}
              <div className="absolute -top-5 -left-5 text-6xl text-purple-600 opacity-50 font-serif">
                "
              </div>
              <p className="text-gray-300 mb-8 relative z-10">
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-purple-500">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-white group-hover:text-purple-400 transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};