import {Prop} from '@nestjs/mongoose';

export abstract class BaseSchema {
  
    @Prop({ type: Date})
    deletedAt: Date;
  
    @Prop({ type: Boolean, default: false })
    isDeleted: boolean;

    @Prop({ type: Date, default: Date.now })
    initDate: Date;
    
    @Prop({ type: Date, default: Date.now })
    updatedAt: Date;
    
}