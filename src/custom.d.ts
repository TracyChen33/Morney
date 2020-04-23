type RootState={
  recordList: RecordItem[];
  tagList: Tag[];
  currentTag?: Tag;
}

type RecordItem = {
  tags: Tag[];
  notes: string;
  type: string;
  amount: number;
  createdAt?: string;
}
type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => 'success' | 'duplicated';// success 表示成功, duplicated 表示name重复
  update: (id: string, name: string) => 'success' | 'Not Found' | 'duplicated';
  remove: (id: string) => boolean;
  save: () => void;
}
