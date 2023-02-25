import React from 'react'
import Question from './Question';

const InterviewAccord = ({data}) => {
  console.log(data);
  return (
    <div className='row'>
      {data.map((item)=>{
        return(
          <Question key={item.id} {...item} />
        )
      })}

    </div>
  )
}

export default InterviewAccord