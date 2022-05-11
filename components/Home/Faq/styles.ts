import classNameAdder from 'utils/classNameAdder'

const styles = {
    faq: "w-full flex flex-col justify-center text-dwhite items-center text-dwhite bg-no-repeat bg-cover bg-characters",
    contentLayer: "w-full h-full relative m-auto",
    containerFaq: "w-full cards-carousel-container m-auto",
    containerFaqBordered: "layout-border md:py-32 md:mx-5",
    faqContent: "flex flex-col lg:flex-row lg:px-2 text-dwhite max-w-6xl m-auto",
}


export default classNameAdder(styles)