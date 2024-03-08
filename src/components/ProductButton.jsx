export default function ProductButton({label, icon, onClick, disabledClass}){
    return(
    <div className={`shadow product-button ${disabledClass}`} onClick={onClick}>
        <i className={`${icon}`}></i>
        <p>{label}</p>
    </div>);
}

  