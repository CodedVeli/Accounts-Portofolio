
const Testimonials = () => {

    const tenstimonies = [
      
        {
            name: 'John H. - Small Business Owner',  
            testimonial: "I can't express how grateful I am for the accounting services provided by [Your Accounting Firm]. They've helped streamline my financial records, optimize my tax strategy, and provided invaluable financial advice. With their expertise, my business has never been in better shape!"
        },
        {
            name:"Roy R. - Freelancer",
            testimonial: "Working with [Your Accounting Firm] has made managing my freelance income a breeze. Their team is not only professional but also incredibly responsive to my needs. Thanks to them, I can focus on my creative work without worrying about the numbers."

        },
        {
            name:"John H. - Small Business Owner",
            testimonial: "I can't express how grateful I am for the accounting services provided by [Your Accounting Firm]. They've helped streamline my financial records, optimize my tax strategy, and provided invaluable financial advice. With their expertise, my business has never been in better shape!"
        },
        {
            name:"Emily R. - Freelancer",
            testimonial: "As a CFO, I've had the pleasure of partnering with [Your Accounting Firm] for years. Their thoroughness and attention to detail have saved our company both time and money. I highly recommend their services to anyone in need of top-notch accounting expertise."

        },

    ]

    const renderedTestimonies = tenstimonies.map((testimony) => {

        return <div key={tenstimonies.name} className=" bg-gray-200 p-6 rounded-[0.5rem]">
            
            <div>
            <p>{testimony.testimonial}</p>
        <h2 className=" font-bold font-Merriweather pt-5">{testimony.name}</h2>
        
        </div></div>
    })

    return (
        <div id="testimonies" className=" xl:m-auto p-10 mt-5 mb-5 ">
           
            <h1 className="flex items-center justify-center p-20 font-Merriweather text-xl">Testimonials <br/><> from people I worked with: </> </h1>
            <div className=" flex flex-row justify-center">
             
             <div className=" xl:flex flex-row gap-10 space-y-8">
           {renderedTestimonies}
           </div>
           </div>
           
        </div>
    );
};

export default Testimonials;
