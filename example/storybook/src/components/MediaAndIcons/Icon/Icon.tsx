import React from 'react';

import {
  Icon,
  AddIcon,
  AlertCircleIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  AtSignIcon,
  BellIcon,
  CalendarDaysIcon,
  CheckIcon,
  CheckCircleIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  ChevronsUpDownIcon,
  CircleIcon,
  ClockIcon,
  CloseIcon,
  CloseCircleIcon,
  CopyIcon,
  DownloadIcon,
  EditIcon,
  EyeIcon,
  EyeOffIcon,
  FavouriteIcon,
  GlobeIcon,
  GripVerticalIcon,
  HelpCircleIcon,
  InfoIcon,
  LinkIcon,
  ExternalLinkIcon,
  LoaderIcon,
  LockIcon,
  MailIcon,
  MenuIcon,
  MessageCircleIcon,
  MoonIcon,
  PaperclipIcon,
  PhoneIcon,
  PlayIcon,
  RemoveIcon,
  RepeatIcon,
  Repeat1Icon,
  SearchIcon,
  SettingsIcon,
  ShareIcon,
  SlashIcon,
  StarIcon,
  SunIcon,
  ThreeDotsIcon,
  TrashIcon,
  UnlockIcon,
} from '@gluestack-ui/themed';

import { ChromeIcon, InstagramIcon, FacebookIcon } from 'lucide-react-native';

const IconBasic = ({ size, name, ...props }: any) => {
  return <Icon as={name} size={size} {...props} />;
};

export default IconBasic;

export {
  AddIcon,
  CheckIcon,
  CloseIcon,
  InfoIcon,
  ArrowUpIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  AtSignIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  ChevronsUpDownIcon,
  PaperclipIcon,
  BellIcon,
  MenuIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ArrowDownIcon,
  CalendarDaysIcon,
  MessageCircleIcon,
  CopyIcon,
  TrashIcon,
  DownloadIcon,
  GripVerticalIcon,
  EditIcon,
  MailIcon,
  LinkIcon,
  ExternalLinkIcon,
  LockIcon,
  RemoveIcon,
  MoonIcon,
  SlashIcon,
  PhoneIcon,
  HelpCircleIcon,
  RepeatIcon,
  Repeat1Icon,
  SearchIcon,
  SettingsIcon,
  LoaderIcon,
  StarIcon,
  SunIcon,
  ClockIcon,
  UnlockIcon,
  EyeIcon,
  EyeOffIcon,
  CloseCircleIcon,
  ShareIcon,
  CircleIcon,
  FavouriteIcon,
  GlobeIcon,
  ThreeDotsIcon,
  Icon,
  ChromeIcon,
  InstagramIcon,
  FacebookIcon,
  PlayIcon,
};

export { VStack, HStack } from '@gluestack-ui/themed';
