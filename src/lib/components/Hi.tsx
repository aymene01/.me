type Props = {
  name: string
}

export const Hi = ({ name }: Props) => <h1 className="font-extralight text-5xl">Hi from {name}</h1>
