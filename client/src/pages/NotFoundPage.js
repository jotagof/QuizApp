import React from 'react'
import routes from '../helpers/routes'

export default function NotFoundPage() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
                ( 404 ) Not Found
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                Vovler al <a href={routes.home}>inicio</a>
            </div>
        </div>

    </div>
  )
}
