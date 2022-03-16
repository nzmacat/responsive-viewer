import React, { useEffect } from 'react'
import AppBar from './AppBar'
import Screens from './Screens'
import Sidebar from './Sidebar'
import ScreenDialog from './ScreenDialog'
import UserAgentDialog from './UserAgentDialog'
import HelpDialog from './HelpDialog'
import Tabs from './Tabs'
import TabDialog from './TabDialog'
import Draw from './Draw'
import { initialize, sideBarVisible } from '../reducers/app'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { useAppSelector } from '../hooks/useAppSelector'
import { selectIsAppReady } from '../reducers/layout'

import Box from '@mui/material/Box'
import LoadingScreen from './LoadingScreen'
import Notifications from './Notifications'
import ScreenshotBlocker from './ScreenshotBlocker'
import { styled } from '@mui/material/styles'

const Root = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
}))

function App() {
  const dispatch = useAppDispatch()
  const initialized = useAppSelector(selectIsAppReady)
  const sideBar = useAppSelector(sideBarVisible)

  useEffect(() => {
    dispatch(initialize())
  }, [dispatch])

  if (!initialized) {
    return <LoadingScreen />
  }

  return (
    <Root>
      <Notifications />
      <TabDialog />
      <ScreenDialog />
      <UserAgentDialog />
      <HelpDialog />
      <AppBar />
      <Draw />
      <Box display="flex" overflow="hidden" flex={1}>
        {!!sideBar && <Sidebar />}
        <Box flex={1} display="flex" flexDirection={'column'}>
          <Tabs />
          <Screens />
        </Box>
      </Box>
      <ScreenshotBlocker />
    </Root>
  )
}

export default App
