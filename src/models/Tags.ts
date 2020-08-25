import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinColumn,
  JoinTable
} from 'typeorm';

import Tools from './Tools';

@Entity('tags')
class Tags {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Tools, tools => tools, { cascade: true })
  @JoinTable({
    name: 'tools_tags',
    joinColumns: [{ name: 'tag_id' }],
    inverseJoinColumns: [{ name: 'tool_id' }]
  })
  tools: Tools[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Tags;
