import { useEffect } from 'react'

export default function Skills() {

    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 
        'Swift', 'SwiftUI', 'Java', 'Python', 'PHP', 'MySQL'];

    useEffect(() => {
        const scrollers = document.querySelectorAll('.scroller');
    
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            scrollAnimation();
        }
    
        function scrollAnimation() {
            scrollers.forEach((scroller) => {
                scroller.setAttribute('data-animated', true);
        
                const scrollerItems = scroller.querySelector('.scroller-items');
                const scrollerContent = Array.from(scrollerItems.children);
    
                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    duplicatedItem.setAttribute('aria-hidden', true);
                    scrollerItems.appendChild(duplicatedItem);
                });
            });
        }
    }, []);
        
    return (
        <>
        <div className='scroller' data-direction='right'>
            <ul className='scroller-items'>
                {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </div>
        </>
    )
}
