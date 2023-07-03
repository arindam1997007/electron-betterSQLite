import { useEffect, useState } from "react"
import "./App.css"
import { Display } from "./Components/Display"
import { InputPerson } from "./Components/InputPerson"
import { useCallback } from "react"

function App() {
	const [data, setData] = useState([])

	const fetchData = useCallback(() => {
		const data = window.sqlite.personDB?.readAllPerson()
		setData(data)
	}, [])

	useEffect(() => {
		fetchData()
	}, [fetchData])

	return (
		<>
			<div className='background'>
				<div className='App'>
					<InputPerson fetchData={fetchData} />
					<Display data={data} />
				</div>
				<span>The background is provided by loading.io </span>
			</div>
		</>
	)
}

export default App
