import { DraggableTopbar,Content, RootLayout, Sidebar } from '@/components'


const  App =()=> {
  return (
    <>
    <DraggableTopbar/>
    <RootLayout>
      <Sidebar className='p-2'>Sidebar</Sidebar>
      <Content className="border-l bg-zinc-900 border-l-white/20 ">Content</Content>
    </RootLayout>
  </>
  )
}

export default App
