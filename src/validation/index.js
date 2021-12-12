import * as Yup from 'yup';

export const memeFormSchema = Yup.object().shape({
  category: Yup.number(),
  meme: Yup.string().required('Alias name is required').max(100, 'Alias name can be up to 100 characters long'),
  title: Yup.string().required('Alias name is required').max(100, 'Alias name can be up to 100 characters long'),
  link: Yup.string().required('Alias name is required').max(100, 'Alias name can be up to 100 characters long'),
});
