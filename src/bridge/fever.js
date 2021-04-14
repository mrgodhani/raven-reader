import { ipcRenderer } from 'electron'

export default {
  login: async (endpoint, formData) => {
    return await ipcRenderer.invoke('fever-endpoint-execute', {
      endpoint: endpoint,
      formData: formData
    })
  },
  subscriptions: async (endpoint, formData) => {
    return await ipcRenderer.invoke('fever-endpoint-execute', {
      endpoint: endpoint,
      formData: formData
    })
  },
  unreadIds: async (endpoint, formData) => {
    return await ipcRenderer.invoke('fever-endpoint-execute', {
      endpoint: endpoint,
      formData: formData
    })
  },
  starredIds: async (endpoint, formData) => {
    return await ipcRenderer.invoke('fever-endpoint-execute', {
      endpoint: endpoint,
      formData: formData
    })
  },
  entries: async (endpoint, ids, formData) => {
    return await ipcRenderer.invoke('fever-endpoint-execute', {
      endpoint: endpoint,
      formData: formData
    })
  },
  markItem: async (endpoint, formData) => {
    return await ipcRenderer.invoke('fever-endpoint-execute', {
      endpoint: endpoint,
      formData: formData
    })
  },
  groups: async (endpoint, formData) => {
    return await ipcRenderer.invoke('fever-endpoint-execute', {
      endpoint: endpoint,
      formData: formData
    })
  }
}
