'use client'
import Container from "./container";


export default function Footer(){
    return(
        <footer>
            <section>
                <Container>
                    <div className="copyright">
                        2023© Copyright &nbsp; <strong><span>Cissy{"'"}s Hair</span></strong>. All Rights Reserved
                        </div>
                        <div style={{textAlign : 'center'}}>Designed by <a href="https://geniusofdigital.com/">GeniusOfDigital</a>
                    </div>
                </Container>
            </section>
        </footer>
    )
}