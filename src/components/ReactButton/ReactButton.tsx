import { useState } from 'react'

const ReactButton = () => {
    const [isOn, setIsOn] = useState(false)
    const label = `React Button ${isOn ? 'On' : 'Off'}`
    return (
        <button
            className="px-4 py-2 border border-slate-500 rounded-full hover:bg-blue-300"
            onClick={() => setIsOn((s) => !s)}
        >
            {label}
        </button>
    )
}

export default ReactButton
