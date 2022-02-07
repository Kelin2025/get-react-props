import React from 'react'

export type GetProps<Component extends React.FC<any>> = Parameters<Component>[0]

export type GetProp<
  Component extends React.FC<any>,
  PropName extends keyof GetProps<Component>
> = GetProps<Component>[PropName]
