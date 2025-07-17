import { ActionButtonsRow, Content, DraggableTopbar, RootLayout, Sidebar } from '@/components'

const App = () => {
  return (
    <>
      <DraggableTopbar />
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonsRow className="flex justify-between mt-1" />
        </Sidebar>
        <Content className="border-l bg-zinc-900 border-l-white/20 ">Content</Content>
      </RootLayout>
    </>
  )
}

export default App
