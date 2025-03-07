import supabase from "../helpers/supabase"

export const LoginData = async (credentials) => {
    const {data, error} = await supabase.auth.signInWithPassword(credentials)
    if (data) {
        return data
    } else {
        return error
    }
}