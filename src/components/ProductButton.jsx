export default function ProductButton({label, icon, disabledClass}){
    return(
    <div className={`shadow product-button ${disabledClass}`}>
        <i className={`bi bi-${icon}`}></i>
        <p>{label}</p>
    </div>);
}

  