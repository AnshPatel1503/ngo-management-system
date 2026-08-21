export default function SectionTitle({
    title,
    subtitle
}){

    return(

        <div className="text-center mb-5">

            <h2 className="section-title">
                {title}
            </h2>

            <p className="section-subtitle">
                {subtitle}
            </p>

        </div>

    );

}