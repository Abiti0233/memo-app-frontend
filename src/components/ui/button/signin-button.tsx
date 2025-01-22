export default function SignInButton({provider, ...props}: {provider: string} & React.ComponentPropsWithRef<typeof button>) {
  return (
    <button className="w-full rounded-lg border border-grey-400 border-solid" {...props}>
      {provider}でサインイン
    </button>
  )
}