import Button from 'react-bootstrap/Button'

export default function BodyGallerySection() {
    return (
        <>
            <div className='gallery-container'>
                <h2>A nossa galeria</h2>
                <Button>Explorar</Button>
                <div className='gallery-img-container'>
                    <img src='./images/machine-front.jpg' />
                    <img src='./images/machine-front.jpg' />
                    <img src='./images/machine-front.jpg' />
                    <img src='./images/machine-front.jpg' />
                    <img src='./images/machine-front.jpg' />
                    <img src='./images/machine-front.jpg' />
                </div>
            </div>
        </>
    )
}