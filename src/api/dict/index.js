import { get, deleteReq } from '@/utils/request'
export const getDictList = () => get('/dict/list')
export const deleteDict = (_id) => deleteReq('/dict/delete', {id: _id})
export const getDictItem = (_id) => get('/dict/item', {id: _id})