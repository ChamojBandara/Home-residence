import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='Browse our latest luxury property listings, featuring exclusive homes with exceptional design and prime locations.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
