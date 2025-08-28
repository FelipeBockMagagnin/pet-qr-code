export default async function Page({
  params,
}) {
  const { id } = await params
  return <div className="container">Visualizando pet numero: {id}</div>
}