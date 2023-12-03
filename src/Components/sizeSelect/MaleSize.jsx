import React from 'react'
import './style.css'


export default function MaleSize(props) {

  return (
    <select name='number' onChange={(event) => props.onSizeSelect(event)}>
      <option value="">Select your size</option>
      <option value='39'>39</option>
      <option value='40'>40</option>
      <option value='41'>41</option>
      <option value='42'>42</option>
      <option value='43'>43</option>
      <option value='44'>44</option>
      <option value='45'>45</option>
      <option value='46'>46</option>
      <option value='47'>47</option>
    </select>
  )
}
