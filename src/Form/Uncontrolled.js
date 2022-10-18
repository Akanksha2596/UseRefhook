import React, {useRef,useState} from 'react'

const Uncontrolled = () => {
    // it is like a useState and preserves the value .No re-rendering
    const luckyname = useRef(null);

    const [show, setShow] = useState();
   const  submitForm = (e) => {
        e.preventDefault();
        const name = luckyname.current.value;
        console.log(name);
        name === '' ? alert('Please enter your name') : setShow(true);
    }
  return (
    <div className='container'>
        <form action ="" onSubmit={submitForm}>
            <div>
                <label htmlFor='luckyname'> Enter yor name </label>
                <input type="text" id="name" ref={luckyname} />
            </div>
            <button> Submit </button>
        </form>
        <p> {show ? `your lucky name is ${luckyname.current.value}` :''}</p>
    </div>
  )
}

export default Uncontrolled