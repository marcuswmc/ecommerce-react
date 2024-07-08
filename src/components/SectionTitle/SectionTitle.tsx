import styles from './SectionTitle.module.css'

interface props {
  title: string,
  subtitle: string,
  tagline?: string
}

function SectionTile(props: props) {
    //Destructuring das classes do module.css
    const { wrapper } = styles

    const { title, subtitle, tagline } = props;


    return (
        <div className={wrapper}>
            {tagline ? <h4>{tagline}</h4> : null}
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    );
}  

export default SectionTile