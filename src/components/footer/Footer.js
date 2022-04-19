import './Footer.css'
const Footer = ()=> {
    return (
        <footer className="footer">
        <div className="container">
            <section className="footer-info">
                <div className="contact">
                    <address>
                        <a href="mailto:manvendra.singh@gmail.com">manvendra.singh@gmail.com</a>
                        <a href="tel:+12019659837">+1-(201) 965-9837</a>
                    </address>
                    <div>
                        <address>
                            357 W Pleasantview Ave 
                            Hackensack NJ
                            07601
                        </address>
                    </div>
                </div>
            </section>
            <div>Company © manvendrapsingh. All rights reserved </div>
        </div>

    </footer>
    );
}

export default Footer