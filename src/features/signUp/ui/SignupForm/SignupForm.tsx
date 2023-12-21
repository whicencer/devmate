import {Input} from "../../../../shared/ui/Input";
import {Button} from "../../../../shared/ui/Button";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {getSignupForm} from "../../model/selectors/getSignupForm.ts";
import {signupActions} from "../../model/slice/signupForm.ts";
import {signupByUsername} from "../../model/services/signupByUsername/signupByUsername.ts";
import { AppDispatch } from "../../../../app/providers/store/config/storeConfig.ts";
import { useState } from "react";
import { ImageUploader } from "../../../../widgets/ImageUploader/ImageUploader.tsx";
import { uploadImage } from "../../../../shared/services/uploadImage.ts";

const SignupForm = () => {
  const {t} = useTranslation();
  const {username, fullname, password} = useSelector(getSignupForm);
  const dispatch = useDispatch<AppDispatch>();

  const [image, setImage] = useState<File | null>(null);

  const changeName = (value: string) => {
    dispatch(signupActions.setFullname(value));
  };
  const changeUsername = (value: string) => {
    dispatch(signupActions.setUsername(value));
  };
  const changePassword = (value: string) => {
    dispatch(signupActions.setPassword(value));
  };

  const handleSignup = async () => {
    const imageUrl = await uploadImage(image);
    dispatch(signupByUsername({ username, fullname, password, profilePicture: imageUrl }));
  };

  return (
      <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center', marginTop: 30, flexDirection: 'column'}}>
        <Input
          label={t("Full name")}
          placeholder='Alex Jackson'
          width='100%'
          maxLength={22}
          value={fullname}
          onChange={(e) => changeName(e.target.value)}
        />
        <Input
          style={{marginTop: 15}}
          label={t("Username")}
          placeholder='@whicencer'
          width='100%'
          maxLength={16}
          value={username}
          onChange={(e) => changeUsername(e.target.value )}
        />
        <Input
          style={{marginTop: 15}}
          label={t("Password")}
          placeholder={t("At least 8 characters")}
          width='100%'
          type='password'
          minLength={8}
          value={password}
          onChange={(e) => changePassword(e.target.value)}
        />
        <ImageUploader setImage={setImage} />
        <Button style={{marginTop: 25, justifySelf: 'center'}} onClick={handleSignup}>{t("Sign up")}</Button>
      </div>
  );
};

export default SignupForm;