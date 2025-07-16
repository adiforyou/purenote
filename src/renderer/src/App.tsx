import { Content, RootLayout, Sidebar } from '@/components'

function App() {
  return (
    <RootLayout>
      <Sidebar>Sidebar</Sidebar>
      <Content className="border-l bg-zinc-900 border-l-white/20 ">Content</Content>
    </RootLayout>
  )
}

export default App
