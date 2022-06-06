import{useState} from 'react'


const FormHook = ( initialState = {} ) => {

    const [data, setData] = useState(initialState); 

    const reset = () => setData(initialState);

    const handleChange = ({ target }) => setData({
        ...data,
        [target.name]: target.value
    })

    const handleChangeSelect = (e) => setData({
        ...data,
        categoria: e
    })

    const uploadImg = url => setData({
        ...data,
        img: url
    })


  return [ data, handleChange, reset, handleChangeSelect, uploadImg ]
}

export default FormHook;