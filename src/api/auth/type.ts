export interface VerificationRes{
  id:string
  image:string
}
export interface LoginParams{
  username: string
  password: string
}
export interface LoginRes{
  code: number
  data: string
  message: string
}
