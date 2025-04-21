import React from 'react'
import Button from "../../components/Button"
import Modal from "../../components/Modal"

const TextContainer: React.FC = () => {
    const [open, setOpen] = React.useState(false)
	return (
		<div className="relative w-full max-w-xl lg:shrink-0 lg:max-w-2xl ">
        <h1 className="text-4xl text-red-500 font-bold tracking-tight sm:text-6xl">
            Select, Print, Wear
        </h1>
        <p className="mt-6 text-lg leading-8 sm:max-w-md lg:max-w-none">
            Welcome to T-Shirt Store – Your Shirt Paradise. The T-Shirt Store
            brings you a curated selection of shirts and design.
            Elevate your street-style game with our latest arrivals.
        </p>
        <div className="w-1/2 mt-4">
            <Button
            text="Show more"
            type="button"
            handleClick={() => setOpen(!open)}
            />
      </div>
      <Modal open={open} setOpen={setOpen} />
		</div>
	)
}

export default TextContainer