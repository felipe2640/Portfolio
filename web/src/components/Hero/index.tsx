import React from 'react'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'
import { RainbowHighlight } from './RainbowHighlight'

type Props = {}

function index({}: Props) {
  return (
    <div className="flex flex-row justify-center ">
      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          <RainbowHighlight />
        </RoughNotationGroup>
      </div>
    </div>
  )
}

export default index
