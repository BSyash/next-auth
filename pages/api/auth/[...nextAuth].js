import NextAuth from "next-auth"
import Provider from "next-auth/providers"

export default NextAuth({
    providers: [
        Provider.GitHub({
            clientId: "108c7946b76507e989a1",
            clientSecret:"cc9dce4569c26785079cf8a5315489844bfcaef1"
        }),
    ]
})