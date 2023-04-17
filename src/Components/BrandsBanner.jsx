import React from 'react'

export default function BrandsBanner({image}) {
  return (
    <>
      <section className='BrandsBanner-section'>
        <img src={require(`../Assets/banners/${image}`)} alt="" />
      </section>
    </>
  )
}
