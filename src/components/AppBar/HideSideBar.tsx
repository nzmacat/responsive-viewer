import React from 'react'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { sideBarVisible, toggleSideBar } from '../../reducers/app'
import { useAppSelector } from '../../hooks/useAppSelector'

export const HideSideBar = () => {
  const dispatch = useAppDispatch()
  const sideBar = useAppSelector(sideBarVisible)

  const onClick = () => {
    dispatch(toggleSideBar(!sideBar))
  }

  return (
    <>
      <Tooltip arrow title={`Hide sidebar`}>
        <IconButton onClick={onClick}>
          {React.createElement(!sideBar ? MenuIcon : MenuOpenIcon, {
            fontSize: 'small',
          })}
        </IconButton>
      </Tooltip>
    </>
  )
}
