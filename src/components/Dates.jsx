import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import dates from '../assets/dates1.svg';

const Dates = () => {
  return (
    <div className='mt-12 lg:mt-44 px-16 '>

<h1 className="font-orbitron text-2xl lg:text-6xl  after:content-['―――'] after:block text-center mb-12">Important Dates</h1>

<div className='flex justify-center'>
<img src={dates} className=' lg:w-1/3'/>
</div>


{/* <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    textClassName='text-xl lg:text-3xl font-semibold '
    // style={{color: '#fff'}}
    date="11 Feb 2024"
    dateClassName='text-xl lg:text-3xl font-semibold'
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title ">Announcement of Hackathon</h3>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement 
    className="vertical-timeline-element"
    date="6 Mar 2024"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h2 className="vertical-timeline-element-title">Last Date for Idea Submission</h2>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element"
    date="7 to 9 Mar 2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Idea Evaluation</h3>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element"
    date="10 Mar 2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Announcement of Shortlisted Teams</h3>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element"
    date="12 Mar 2024"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Last Date for Final Registration</h3>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element"
    date="14 to 15 Mar 2024"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Final Hackathon</h3>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element"
    date="15 Mar 2024"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Announcement of Winners</h3>
    
  </VerticalTimelineElement>
  
</VerticalTimeline> */}
        
    </div>
  )
}

export default Dates