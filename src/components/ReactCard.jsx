import React, {useState} from 'react'

const ReactCard = () => {
    const [data, setData] = useState('');

    const dataInput = (e) => {
        setData(e.target.value)
    }

  return (
    <div>
        <div>
			<input onChange={(e) => dataInput(e)} className="bg-red-200 rounded w-60 h-12 mt-5" type="text" name="satu" id="satu" />
		</div>
		<h1>{data}</h1>
    </div>
  )
}

export default ReactCard