import { Controller, useForm } from 'react-hook-form'
import AdminNavigation from '../../../../ui/admin-navigation/AdminNavigation'
import formStyles from '../../../../ui/form-element/admin-form.module.scss'
import SkeletonLoader from '../../../../ui/SkeletonLoader'
import Button from '../../../../ui/form-element/Button'
import styles from './UserEdit.module.scss'
import { useUserEdit } from './useUserEdit'
import { IUser } from '../../../../../types/user.types'
import AuthFields from '../../../auth/AuthFields'


const UserEdit = () => {
  const {handleSubmit, register, formState, setValue, control} = useForm<IUser>({
    mode: 'onChange'
  })
  const {isLoading, onSubmit} = useUserEdit(setValue)

  return (
    <div>
      <AdminNavigation />
      <h1 className={styles.header}>Edit user</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
        {isLoading ?
          <SkeletonLoader count={3} />
        :
          <>
            <AuthFields register={register} formState={formState}  />
            <Controller
            control={control} 
            name='isAdmin' 
            render={({field}) => (
              <button className={styles.button} onClick={(e) => {
                e.preventDefault()
                field.onChange(!field.value)
              }}>
                {field.value ? 'Make it regular user' : 'Make it admin'}
              </button>
            )}
            ></Controller>

            <Button>Update</Button>
          </>
        }
      </form>
    </div>
  )
}

export default UserEdit