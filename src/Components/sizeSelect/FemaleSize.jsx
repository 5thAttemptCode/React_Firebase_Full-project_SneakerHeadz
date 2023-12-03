import React from 'react'
import './style.css'


export default function FemaleSize(props) {

  return (
    <select name='number' onChange={(event) => props.onSizeSelect(event)}>
      <option value="">Select your size</option>
      <option value='36'>36</option>
      <option value='37'>37</option>
      <option value='38'>38</option>
      <option value='39'>39</option>
      <option value='40'>40</option>
      <option value='41'>41</option>
      <option value='42'>42</option>
    </select>
  )
}
