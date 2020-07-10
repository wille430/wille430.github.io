import Highway from '@dogstudio/highway';
import {TimelineLite} from 'gsap';

class Fade extends Highway.Transition{
    in({from, to, done}){
        const tl1= new TimelineLite();
        tl1.fromTo(to, 1, {left: '-100%'}, {left: '0%'});
        tl1.fromTo(to.children[0], 1, {left: '200%', position: 'fixed'}, {left: '0%', right: '0%', position: 'fixed', onComplete: 
            function(){
                to.children[0].style.position = 'relative';
                from.remove();
                done();
            }}
        );
    }
    out({form, done}){
        done();
    }
}

export default Fade;