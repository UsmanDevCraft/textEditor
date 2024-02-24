import React from 'react'

const About = () => {
  return (
    <div className='container my-5'>
        <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                <strong>1. Streamlined Efficiency:</strong>
                </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                <div className="accordion-body">
                Bid farewell to cluttered editing menus and hello to organized bliss. Our accordion layout condenses multiple formatting options into sleek, collapsible sections, ensuring every tool is within arm's reach without overwhelming your workspace.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                <strong>2. Dynamic Flexibility:</strong>
                </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                <div className="accordion-body">
                Adapt the app to fit your unique workflow seamlessly. Customize your accordion sections to prioritize the tools you use most frequently, creating a tailored editing experience that boosts productivity and enhances creativity.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                <strong>3. Enhanced Focus:</strong>
                </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                <div className="accordion-body">
                Dive deep into your writing without distractions. The accordion's intuitive design allows you to expand or collapse sections with a simple click, keeping your focus squarely on refining your content – not fumbling through endless menus.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                <strong>4. Effortless Navigation:</strong>
                </button>
                </h2>
                <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
                <div className="accordion-body">
                Navigate your editing journey with ease. Our accordion feature provides a roadmap to your editing toolkit, guiding you effortlessly through the process of perfecting your prose, whether you're formatting text, adding emphasis, or fine-tuning layout.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                <strong>5. Limitless Possibilities:</strong>
                </button>
                </h2>
                <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse">
                <div className="accordion-body">
                Unleash your imagination and explore the vast potential of our text editing app. With the accordion at your fingertips, there's no limit to the ways you can customize, refine, and elevate your writing to new heights of excellence.
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
