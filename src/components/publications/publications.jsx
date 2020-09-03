import React, {Component} from "react";
import '../../../src/app.css';

class Publications extends Component{
    state={}
    render(){
        return(
            <div className="contact-section" id="publications" >
                <h1>Publications</h1>
                <h2>Upcoming</h2>
                <h3>Underlying affect regulation mechanism of PIV </h3>
                {/* <hr/> */}
                <h2>Published</h2>
                <p>Miri, P., Jusuf, E., Margarit, H.,Flory, R., Uusberg, A., Isbister K., Marzullo K., Gross J. J. 
                    <a href="https://wehab.stanford.edu/wp-content/uploads/2020/03/CHI_2020.pdf">
                        PIV++: Evaluating a Personalizable, Inconspicuous Vibrotactile (PIV) Breathing Pacer for In-the-Moment Affect Regulation</a> 
                        ACM Transactions on Computer-Human Interaction (CHI); 
                        <a href="https://wehab.stanford.edu/wp-content/uploads/2020/03/Sup_CHI_2020.pdf">Supplementary Material (Q&A)</a>;
                        <a href="https://wehab.stanford.edu/wp-content/uploads/2020/05/Evaluating-a-Personalizable-Inconspicuous-VibrotactilePIV-Breathing-Pacer-for-In-the-Moment-Affect-Regulation.pdf">Award</a>;  
                        <a href="https://wehab.stanford.edu/wp-content/uploads/2020/04/CHI2020_All_reviews_with_rebuttal_responses.pdf">Peer Reviews</a>; 
                        <a href="https://wehab.stanford.edu/wp-content/uploads/2020/04/CHI2020_rebuttal_color_coded_with-content_submitted.pdf">Rebuttal</a>; 
                        <a href="https://www.youtube.com/watch?v=esvNkZXEimE">Video</a>
                </p>
                <p>
                    Miri, P., Jusuf, E., Gross J. J., Isbister K., Marzullo K. (in press). <a href="https://wehab.stanford.edu/wp-content/uploads/2019/08/ACII2019_miri_2019_shortV-1.pdf">Affect regulation using technology: Lessons learned by taking a multidisciplinary perspective.</a> 
                    8th International Conference on. Affective Computing & Intelligent Interaction (ACII);  
                    <a href="http://acii-conf.org/wp-content/uploads/2019/08/ACII-Special-Tracks-Abstracts.pdf">link to all accepted submission at this venue.</a>
                </p>
                <p>
                    Miri, P., Flory, R., Uusberg, A., Culbertson, H., Harvey, R., Keman, A., Peper, E., Gross, J. J., Marzullo, M. (2019). <a href="https://wehab.stanford.edu/wp-content/uploads/2020/04/TOCHI19_PIV_revised_round3.pdf">
                    PIV: Placement, pattern, and personalization of an inconspicuous vibrotactile breathing pacer.</a> 
                    ACM Transactions on Computer-Human Interaction (TOCHI). 
                    <a href="https://www.youtube.com/watch?v=c1ezpVQLjkw">Video</a>
                </p>
                <p>
                    Miri, P., Flory, R., Uusberg, A., Uusberg, H., Gross, J. J., & Isbister, K. (2017). <a href="https://dl.acm.org/doi/10.1145/3027063.3053147">HapLand: A scalable robust emotion regulation haptic system testbed.</a> 
                    In Proceedings of the 2017 CHI Conference Extended Abstracts on Human Factors in Computing Systems (pp. 1916–1923). ACM. doi:10.1145/3027063.3053147 
                    <a href="http://mentalhealth.media.mit.edu/wp-content/uploads/sites/15/2017/05/CMH_2017_paper_10.pdf">[full version]</a>
                </p>
                <p>
                    Miri, P., Uusberg, A., Culbertson, H., Flory, R., Uusberg, H., Gross, J. J., … & Isbister, K. (2018). 
                    <a href="https://par.nsf.gov/servlets/purl/10092339">Emotion regulation in the wild: Introducing WEHAB system architecture.</a>
                    In Extended Abstracts of the 2018 CHI Conference on Human Factors in Computing Systems (p. LBW021). ACM. doi:10.1145/3170427.3188495
                </p>
            </div>
        )
    }
}

export default Publications;