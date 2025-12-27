"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function MyButton() {
  const [msg, setMsg] = useState('Is it your birthday?')
  const [yesScale, setYesScale] = useState(1)
  const areys = ["are you sure?", "today isn't your bairthday?", "i dont think so", "really sure?", "are you really really sure?"]
  const [remaining, setRemaining] = useState([...areys])
  const router = useRouter()

  return (
    <div className="flex flex-col items-center gap-6 px-4 ">
      <p id="text" className="text-center relative xl:text-8xl   lg:text-9xl sm:text-5xl">{msg}</p>

      <div className="">
        <button
          id="button1"
          onClick={() => { setMsg(''); router.push('/how'); setYesScale(1) }}

          className={
            `h-15 w-40 m-1 rounded-3xl bg-fuchsia-500 overflow-hidden transform transition-transform duration-200 ease-in-out my-10  xl:h-20 text-5xl xl:w-50 m-1 max-sm:w-25 mx-1          max-md:w-50   lg:mx-10   `
          }
          style={{ transform: `scale(${yesScale})` }} 
        >
          YES
        </button>

        <button
          id="button2"
          onClick={() => {
            setRemaining(prev => {
              const pool = prev.length ? prev : [...areys]
              const idx = Math.floor(Math.random() * pool.length)
              const choice = pool[idx]
              setMsg(choice)
              const next = pool.filter((_, i) => i !== idx)
              return next
            })
            setYesScale(s => s + 0.9)
          }}
          className="h-15 w-40 m-1 rounded-3xl bg-fuchsia-500 overflow-hidden transform transition-transform duration-200 ease-in-out my-1  xl:h-20  text-5xl xl:w-50 m-1 max-sm:w-25 mx-1 text-2xl      max-md:w-50    lg:mx-10"
        >
          NO
        </button>
      </div>
    </div>
  )
}